# **Serverless Web Application on AWS**

### **Project Overview:**
This project showcases the development of a fully serverless web application using a combination of AWS services such as **Lambda**, **DynamoDB**, and **S3**. The application demonstrates how to implement key functionalities like Create, Read, Update, and Delete (CRUD) operations on data stored in DynamoDB, all while utilizing the power of a serverless architecture to ensure scalability, cost efficiency, and minimal infrastructure management.

### **Architecture Overview:**
![image](https://github.com/user-attachments/assets/8781cf22-fa3d-4fde-b279-804d3b0a5616)

The architecture leverages the following AWS services to build a robust, scalable, and highly available application:
- **AWS Lambda**: To implement the serverless backend logic for handling CRUD operations on DynamoDB.
- **Amazon DynamoDB**: A NoSQL database used for storing and managing application data.
- **Amazon S3**: To host static web content (HTML, CSS, JavaScript) in a scalable and cost-effective manner.
- **Amazon CloudFront**: A content delivery network (CDN) to ensure low-latency, secure delivery of the S3-hosted static files.

### **Project Workflow:**
1. **DynamoDB Setup**: 
   - Create a DynamoDB table to store data items (e.g., user data, application-specific objects).
   
2. **Lambda Integration**: 
   - Build AWS Lambda functions for handling each CRUD operation on the DynamoDB table (Create, Read, Update, Delete). 
   - Configure Lambda with API Gateway to expose these functions via a RESTful API.

3. **S3 for Frontend Hosting**: 
   - Host the static content (HTML, CSS, JavaScript) for the web application using Amazon S3, leveraging its high availability and durability for web hosting.

4. **CloudFront Distribution**: 
   - Set up an Amazon CloudFront distribution to accelerate content delivery globally, ensuring low-latency access to static files hosted on S3.

### **Implementation Steps:**
1. **DynamoDB**: Define and provision a DynamoDB table, specifying the necessary schema, partition keys, and throughput capacity.
2. **Lambda CRUD Functions**: Develop and deploy Lambda functions to perform the backend logic for each CRUD operation, interacting with the DynamoDB table programmatically.
3. **API Gateway**: Integrate API Gateway to create RESTful endpoints that trigger the Lambda functions, enabling users to interact with the web application.
4. **S3 Hosting**: Configure an S3 bucket for static website hosting, upload the web assets, and set proper bucket policies for public access.
5. **CloudFront Setup**: Create a CloudFront distribution to improve performance and deliver static assets with minimal latency across geographic regions.

### **Expected Outcomes:**
By completing this project, you will:
- Build a **serverless web application** leveraging AWS services.
- Gain practical experience in deploying **Lambda functions** for serverless computing and **DynamoDB** for scalable data storage.
- Host and distribute static files using **S3** and **CloudFront**, ensuring secure and fast content delivery.
- Integrate various AWS services to form a cohesive and production-ready solution.

### **Key Learning Areas:**
- **Serverless Architecture**: Learn how to architect and implement applications without managing servers or infrastructure.
- **AWS Lambda & API Gateway**: Gain experience in setting up backend logic as serverless functions and exposing them via RESTful APIs.
- **DynamoDB**: Understand the principles of NoSQL databases and how to use DynamoDB for fast and flexible data management.
- **S3 & CloudFront**: Learn how to host static websites and optimize global content delivery using AWS’s scalable and efficient services.

