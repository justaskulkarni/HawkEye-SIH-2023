# from ultralytics import YOLO
# import cv2
# import torch
# import torchvision.transforms as transforms
# from torchvision import models
# from PIL import Image
# import numpy as np
# from sklearn.metrics.pairwise import cosine_similarity

# # Load YOLOv8 model
# model_yolo = YOLO('yolov8n.pt')

# # Load ResNet-50 model
# model_resnet = models.resnet50(pretrained=True)
# model_resnet.eval()

# # Define a transformation for input images
# transform = transforms.Compose([
#     transforms.Resize((224, 224)),
#     transforms.ToTensor(),
#     transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
# ])

# # Load and preprocess your occluded and clean images
# clean_image = Image.open('cctv_img.jpg').convert('RGB')

# clean_image = transform(clean_image)

# # Add a batch dimension to the images
# clean_image = clean_image.unsqueeze(0)

# # Use the model to extract features
# with torch.no_grad():
#     clean_features = model_resnet(clean_image)

# # Convert features to numpy arrays
# clean_features = clean_features.numpy()

# # Load video
# video_path = './cctv_vid.mp4'
# cap = cv2.VideoCapture(video_path)

# ret = True
# # Read frames
# while ret:
#     ret, frame = cap.read()

#     if ret:

#         # Detect objects using YOLOv8
#         results = model_yolo.track(frame, persist=True)
#         # Process detected objects
#         for obj in results[0]:
#             bbox = obj.boxes.xyxy
#             print(bbox)
#             bbox = bbox.squeeze().tolist()  # Convert the tensor to a list
#             cropped_object = frame[int(bbox[1]):int(bbox[3]), int(bbox[0]):int(bbox[2])]
#             #cropped_object = frame[bbox[1]:bbox[3], bbox[0]:bbox[2]]
#             cropped_object = Image.fromarray(cropped_object).convert('RGB')
#             cropped_object = transform(cropped_object)
#             cropped_object = cropped_object.unsqueeze(0)

#             # Calculate similarity with clean image
#             with torch.no_grad():
#                 object_features = model_resnet(cropped_object)
#             object_features = object_features.numpy()
#             similarity = cosine_similarity(object_features, clean_features)
#             print(similarity[0][0])
            
#             # Visualize the object and similarity score
#             if(similarity>0.45):
#                 cv2.rectangle(frame, (int(bbox[0]), int(bbox[1])), (int(bbox[2]), int(bbox[3])), (0, 255, 0), 2)
#                 cv2.putText(frame, f'Similarity: {similarity[0][0]:.2f}', (int(bbox[0]), int(bbox[1]) - 10),
#                         cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
#             else:
#                 cv2.rectangle(frame, (int(bbox[0]), int(bbox[1])), (int(bbox[2]), int(bbox[3])), (0, 0, 255), 2)
#                 cv2.putText(frame, f'Similarity: {similarity[0][0]:.2f}', (int(bbox[0]), int(bbox[1]) - 10),
#                         cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)

#         # Visualize the results
#         #frame_ = results[0].plot()
#         #cv2.imshow('frame', frame_)
#         cv2.imshow('frame', frame)
#         if cv2.waitKey(25) & 0xFF == ord('q'):
#             break


# # Release video capture and close OpenCV windows
# cap.release()
# cv2.destroyAllWindows()

from ultralytics import YOLO
import cv2
import torch
import torchvision.transforms as transforms
from torchvision import models
from PIL import Image
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

# Load YOLOv8 model
model_yolo = YOLO('yolov8n.pt')

# Load ResNet-50 model
model_resnet = models.resnet50(pretrained=True)
model_resnet.eval()

# Define a transformation for input images
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])

# Load video
video_path = './cctv_vid.mp4'
cap = cv2.VideoCapture(video_path)

# Initialize clean features
clean_features = None

ret = True
# Read frames
while ret:
    ret, frame = cap.read()

    if ret:

        # Detect objects using YOLOv8
        results = model_yolo.track(frame, persist=True)
        
        # Update clean features based on the first frame's detection
        if clean_features is None and len(results[0]) > 0:
            first_object = results[0][0]
            bbox = first_object.boxes.xyxy.squeeze().tolist()
            cropped_object = frame[int(bbox[1]):int(bbox[3]), int(bbox[0]):int(bbox[2])]
            cropped_object = Image.fromarray(cropped_object).convert('RGB')
            cropped_object = transform(cropped_object)
            cropped_object = cropped_object.unsqueeze(0)

            # Calculate features for the first detected object
            with torch.no_grad():
                clean_features = model_resnet(cropped_object).numpy()

        # Process detected objects
        for obj in results[0]:
            bbox = obj.boxes.xyxy.squeeze().tolist()
            cropped_object = frame[int(bbox[1]):int(bbox[3]), int(bbox[0]):int(bbox[2])]
            cropped_object = Image.fromarray(cropped_object).convert('RGB')
            cropped_object = transform(cropped_object)
            cropped_object = cropped_object.unsqueeze(0)

            # Calculate similarity with clean image
            with torch.no_grad():
                object_features = model_resnet(cropped_object).numpy()
            similarity = cosine_similarity(object_features, clean_features)
            print(similarity[0][0])

            # Visualize the object and similarity score
            if similarity > 0.45:
                cv2.rectangle(frame, (int(bbox[0]), int(bbox[1])), (int(bbox[2]), int(bbox[3])), (0, 255, 0), 2)
                cv2.putText(frame, f'Similarity: {similarity[0][0]:.2f}', (int(bbox[0]), int(bbox[1]) - 10),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
            else:
                cv2.rectangle(frame, (int(bbox[0]), int(bbox[1])), (int(bbox[2]), int(bbox[3])), (0, 0, 255), 2)
                cv2.putText(frame, f'Similarity: {similarity[0][0]:.2f}', (int(bbox[0]), int(bbox[1]) - 10),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)

        # Visualize the results
        cv2.imshow('frame', frame)
        if cv2.waitKey(25) & 0xFF == ord('q'):
            break

# Release video capture and close OpenCV windows
cap.release()
cv2.destroyAllWindows()
