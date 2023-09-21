<p align="center">
   <img height="150" width="320" src="https://github.com/justaskulkarni/HawkEye-SIH-2023/assets/103986230/d089c887-a03d-4aae-80ec-e82388df949b">
</p>
<h1 align="center" >HawkEye-SIH-2023</h1>

##  📝Description
Website which achieves Robust human target detection and acquisition/locking without losing track under occlusions for outdoor operational scenarios. It also includes a dashboard which reflects the number of suspicious activities detected and chatbot assistance as well.


## 🔗Links
- [GitHub Repository](https://github.com/justaskulkarni/HawkEye-SIH-2023)
- [Demo Video](https://drive.google.com/file/d/1fZC_vwGEmBIr8NUhxDPyR_3u7ei_rAML/view?usp=sharing)


## 🤖Tech-Stack 
#### ML
- CNN 
- LSTM

#### Deep Learning Models for Identification & Human Activity Tracking
- Python
- Flask
- OpenCV
- Tensorflow
- Scikit-Learn

#### Web-dev
- HTML/CSS
- JavaScript
- React Framework

#### Back-end
- NodeJS
- ExpressJS

#### Database
- MongoDB Atlas

## 🔮Future Scope
Future plans for the project :
- Buzzer alert when suspicious activity is detected
- Track and recognize individuals as they move across the camera network, i.e. different cameras in real-time.


## 💻Usage
* The Web based interface comes with a three-tiered authentication for Ministry Of Defence, Intelligence Agencies and Border Security Forse (BSF) :
    * **Ministry Of Defence** : Has access to Data Analytics Dashboard, Alerts and Real-time chat.
    * **Intelligence Agencies** : Has access to Data Analytics Dashboard, Alerts and Real-time chat along with access to all CCTV feeds.
    * **Border Security Force** : Can create daily reports and monitor the CCTV feeds assigned to their territory.
* The Dashboard showcases the count of potentially concerning events detected across multiple CCTV feeds under scrutiny.
* Chat rooms to facilitate real time communication between intelligence agencies and ministry of defence using **Socket.IO**.
* **Re-identification** of the suspect inspite of occlusion in different CCTV feeds is performed using **YOLOv8** model for object detection & tracking. **ResNet50** pretrained model is used for feature extraction and extracted features of different video frames are compared using Cosine similarity which helps in re-identifying the suspect successfully.
* **Detection of Suspicious Activities** is achieved through a **LRCN=CNN+LSTM** based DeepLearning Model. LRCN is a neural network architecture that combines CNNs with LSTM networks.  This model tracks many human-activities like walking, running, boxing, fighting, handwaving, etc.

## 🚀 Flow of Events
**1)** Live inputs from the cameras will be fed via Web Interface into the object tracking and re-ID system which will further keep humans into the frame.\
 **2)** After successfully having a person in a frame, the suspicious activity detection system comes into the picture which classifies the performed activity into one of those for which the model is trained.\
 **3)** All this real-time data is then stored into a secured database which contains all the necessary details like camera location, date & time, detected activity, accuracy, and the count of a particular activity.\
**4)** The BSF will retrieve the stored data to generate a report, and if necessary, the chat system can be utilized by the Ministry of Defence and Intelligence Agents for communication.


## 👨‍💻Team Members
- [Aditya Kulkarni](https://github.com/justaskulkarni) : dcadityakulkarni@gmail.com
- [Anushree Dere](https://github.com/AnushreeDere) : anushreedere@gmail.com
- [Rushi Vipul Jani](https://github.com/R-V-J) : rvjani22@gmail.com
- [Arsh Khan](https://github.com/Arsh-Khan) : khanarsh0124@gmail.com
- [Asmita Raina](https://github.com/AsmitaRaina) : asmitaraina2003@gmail.com
- [Srushti Gaidhane](https://github.com/SrushtiGaidhane) : srushtig2006@gmail.com

