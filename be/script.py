import cv2
import tensorflow as tf
import numpy as np
from PIL import Image
from requests import post
from io import BytesIO
from json import dumps
from base64 import b64encode
from os import environ
from dotenv import load_dotenv



# loading the environment data

load_dotenv()
def send_request(prd, data):
    API_URL = environ.get("API_URL")
    if prd[0]:
        img = Image.fromarray(data[0])
        headers = {"Content-Type": "application/json; charset=utf-8"}
        im_file = BytesIO()
        img.save(im_file, format="JPEG")
        im_bytes = im_file.getvalue()
        im_b64 = b64encode(im_bytes).decode()
        encodedNumpyData = dumps({"body":{"imageB64" : im_b64, "cameraID" : camID}})
        # encodedNumpyData = {"body" : encodedNumpyData}
        print(encodedNumpyData)
        ret = post(API_URL, headers=headers, data=encodedNumpyData)
        print(ret)

def final_prediction_function(buffer):
    prdlbl = float("inf")
    for img in buffer:

        predictions = model.predict(img)
        prdlbl = []
        for mem in predictions:
            prdlbl.append(np.argmax(mem))

    send_request(prdlbl, buffer[0])
    buffer.clear()
    return buffer

camID = environ.get("camID")
batch_size = 100
img_h = 250
img_w = 250

data = np.ndarray(shape=(1, img_h, img_w, 3), dtype=np.uint8)
cap = cv2.VideoCapture(0)

model = tf.keras.models.load_model("./Accident_pred.h5") 

testing_ds = tf.keras.preprocessing.image_dataset_from_directory(
    r"./Accident detection/data/test",
)

# Driver Code

class_names = testing_ds.class_names


buffer = []
buff_size = 15
buff_size_current=0

while 1:
    ret, frame = cap.read()
    cv2.imshow("Window", frame)
    # frame = cv2.imread("test_img.jpg")
    frame = cv2.resize(frame, (img_h, img_w))
    frame.resize(250,250,3)
    image_array = np.asarray(frame)
    data[0] = image_array
    # send_request([1], data)
    buffer.append(data)
    buff_size_current+=1
    if buff_size_current == buff_size:
        buffer = final_prediction_function(buffer)
        buff_size_current = 0
        key = cv2.waitKey(1)
        if key == (ord('q')):
            break
cv2.destroyAllWindows()
cap.release()
