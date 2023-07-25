---
title: "How to implement a microservice-based application, packaged with Helm and CI/CD pipelines."
meta_title: ""
description: "Designing and Implementing a Microservice-based Application with Helm and a DevOps Pipeline"
date: 2023-07-23T05:00:00Z
# image: "https://res.cloudinary.com/<your docker username>/image/upload/f_auto,q_auto/v1/algofanatics_assets/assets/blog/xyruli9slbwtazplckgs"
categories: ["devops"]
author: "Samson Ajulor"
tags: ["Infrastructure as Code (IAC)", "Monitoring and Logging", "Security Measures"]
draft: false
---

1. **What is Helm?**
   
   Helm is a package manager for Kubernetes, an open-source container orchestration platform. It simplifies the deployment, management, and scaling of applications on Kubernetes clusters. Helm uses pre-configured packages called "charts" to define, install, and upgrade complex Kubernetes applications.

2. **What is it used for?**
   
   Helm is primarily used for the following purposes:
   
   - Simplifying deployment: Helm enables users to define applications in a templated format called charts, which encapsulate all the necessary Kubernetes resources and configurations required to run the application. This makes the deployment process more streamlined and repeatable.

   - Managing releases: Helm allows users to manage different releases of the same application, making it easier to rollback or upgrade deployments.

   - Sharing and reusability: Helm charts can be shared with others, promoting collaboration and enabling the reuse of application configurations across different environments.

   - Configurability: Helm charts can be customized using parameters and values, allowing users to adapt the application to their specific needs without modifying the original chart.

3. **Alternatives to Helm:**

   There are several alternatives to Helm for managing Kubernetes applications:

   - **Kustomize**: A package manager bundled with Kubernetes (since version 1.14) that focuses on providing configuration customization capabilities to Kubernetes manifests without the need for a separate package manager.

   - **Kubeform**: An open-source Kubernetes operator-based application management tool that allows users to define, manage, and operate applications using Kubernetes Custom Resource Definitions (CRDs).

   - **Kapp**: A Kubernetes application management tool that enables users to deploy and operate applications using declarative YAML files.

   - **Skaffold**: A tool that automates the development workflow for Kubernetes applications, handling the build, push, and deployment of containerized applications on a Kubernetes cluster.

4. **Advantages of using Helm:**

   - **Simplified Deployment**: Helm makes it easy to deploy complex applications on Kubernetes clusters by encapsulating all required resources and configurations into a single package (chart).

   - **Reusability**: Helm charts can be shared and reused, enabling collaboration among developers and standardizing deployment practices.

   - **Versioning and Rollbacks**: Helm allows versioning of application releases, making it convenient to rollback to previous versions if needed.

   - **Templating**: Helm supports templating, which enables parameterization of charts and easy customization without modifying the original chart.

   - **Vibrant Community**: Helm has a large and active community, resulting in a rich ecosystem of charts and plugins, making it easier to find solutions to specific use cases.

5. **Disadvantages of using Helm:**

   - **Steep Learning Curve**: Learning Helm and understanding its concepts may be challenging, especially for newcomers to Kubernetes and package managers.

   - **Dependency Management**: Helm charts may have external dependencies, and managing these dependencies can become complex in some cases.

   - **Security Concerns**: Using Helm may introduce security risks if charts from untrusted sources are deployed without proper review.

   - **Chart Stability**: The quality and stability of Helm charts can vary depending on their maintainers, which may lead to some charts being less reliable than others.

   - **Overhead**: Helm introduces an additional layer of abstraction, which could add some overhead and complexity to the deployment process compared to using raw Kubernetes manifests directly.

## Phase One - Create the services
We will keep it simple

1. Authentication Service - with express and typescript

First, make sure you have Node.js and Yarn installed on your system. Then, follow these steps to create the application:

Step 1: Initialize the project and install dependencies

Open your terminal and run the following commands:

```bash
# Create a new directory for your project
mkdir authentication-service

# Move into the newly created directory
cd authentication-service

# Initialize a new Node.js project with TypeScript support
yarn init -y
yarn add express @types/express typescript ts-node-dev
```

Step 2: Create the application files

Create a new file named `app.ts` in the project root directory and add the following code:

```typescript
import express, { Request, Response, NextFunction } from 'express';

const app = express();
const PORT = 3990;

// Hardcoded user data (for simplicity)
const users = [
  {
    username: 'user1',
    password: 'password1',
    id: '1',
  },
  {
    username: 'user2',
    password: 'password2',
    id: '2',
  },
];

// Middleware to parse incoming JSON data
app.use(express.json());

// Middleware to authenticate user
function authenticateUser(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;

  // Simulating user lookup in the database
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Attach the authenticated user to the request object
  req.user = user;

  next();
}

// Protected route
app.get('/protected', authenticateUser, (req: Request, res: Response) => {
  res.json({ message: 'You have accessed a protected route', user: req.user });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
```

Step 3: Configure the TypeScript compiler

Create a `tsconfig.json` file in the project root directory with the following content:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
  },
  "include": ["app.ts"],
  "exclude": ["node_modules"]
}
```

Step 4: Update the package.json

Update the `package.json` file to include the scripts for running the application:

```json
{
  "name": "authentication-service",
  "version": "1.0.0",
  "scripts": {
    "start": "ts-node-dev --respawn --transpile-only app.ts"
  },
  "dependencies": {
    "express": "^4.17.1",
    "@types/express": "^4.17.11",
    "typescript": "^4.4.3",
    "ts-node-dev": "^1.1.8"
  }
}
```

Step 5: Start the application

Start the application by running the following command in the terminal:

```bash
yarn start
```

Your Express server should now be running on http://localhost:3990. You can use tools like `curl`, Postman, or a web browser to make requests to the protected route with appropriate JSON data (e.g., `{ "username": "user1", "password": "password1" }`).

2. Plans service - with express and typescript

Sure! Below is a simple Express application that allows users to create plans without using a database. This example uses TypeScript and Yarn.

Follow the steps below to create the application:

Step 1: Initialize the project and install dependencies

Open your terminal and run the following commands:

```bash
# Create a new directory for your project
mkdir plan-service

# Move into the newly created directory
cd plan-service

# Initialize a new Node.js project with TypeScript support
yarn init -y
yarn add express @types/express typescript ts-node-dev
```

Step 2: Create the application files

Create a new file named `app.ts` in the project root directory and add the following code:

```typescript
import express, { Request, Response } from 'express';

const app = express();
const PORT = 3991;

// Middleware to parse incoming JSON data
app.use(express.json());

// In-memory storage for plans (for simplicity)
const plans: any[] = [];

// Route to create a new plan
app.post('/plans', (req: Request, res: Response) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  // Generate a unique ID for the plan (you can use a library like 'uuid' in a real-world scenario)
  const id = Math.random().toString(36).substr(2, 9);

  // Create the new plan object
  const newPlan = { id, title, description };

  // Store the plan in the in-memory array
  plans.push(newPlan);

  res.status(201).json(newPlan);
});

// Route to get all plans
app.get('/plans', (req: Request, res: Response) => {
  res.json(plans);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
```

Step 3: Configure the TypeScript compiler

Create a `tsconfig.json` file in the project root directory with the following content:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
  },
  "include": ["app.ts"],
  "exclude": ["node_modules"]
}
```

Step 4: Update the package.json

Update the `package.json` file to include the scripts for running the application:

```json
{
  "name": "plan-service",
  "version": "1.0.0",
  "scripts": {
    "start": "ts-node-dev --respawn --transpile-only app.ts"
  },
  "dependencies": {
    "express": "^4.17.1",
    "@types/express": "^4.17.11",
    "typescript": "^4.4.3",
    "ts-node-dev": "^1.1.8"
  }
}
```

Step 5: Start the application

Start the application by running the following command in the terminal:

```bash
yarn start
```

Your Express server should now be running on http://localhost:3991. You can use tools like `curl`, Postman, or a web browser to create plans by making POST requests to `http://localhost:3991/plans` with appropriate JSON data (e.g., `{ "title": "Plan 1", "description": "This is the first plan" }`).

You can also retrieve all plans by making a GET request to `http://localhost:3991/plans`.

3. Analytics Service - with django and python

We will create a simple Django application that analyzes a list of users and plans without using a database, we'll use Django's in-memory data structures like lists and dictionaries. We'll then display common metrics to the frontend using Django's views and templates.

Follow the steps below to create the application:

Step 1: Install Django

Make sure you have Python installed on your system. Then, create a new virtual environment and install Django:

```bash
# Create a new virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows, use: venv\Scripts\activate

# Install Django
pip install django
```

Step 2: Create the Django project and app

```bash
helm-admin startproject analytics_service
cd analytics_service
python manage.py startapp analyzer
```

Step 3: Define the data and analysis functions

Open the `analyzer/models.py` file and define the data structures and analysis functions. For simplicity, we'll use Python lists and dictionaries to store users and plans:

```python
# analyzer/models.py

users = [
    {'id': 1, 'name': 'John Doe'},
    {'id': 2, 'name': 'Jane Smith'},
]

plans = [
    {'id': 1, 'title': 'Plan 1', 'description': 'This is the first plan'},
    {'id': 2, 'title': 'Plan 2', 'description': 'This is the second plan'},
]

def get_user_by_id(user_id):
    return next((user for user in users if user['id'] == user_id), None)

def get_plan_by_id(plan_id):
    return next((plan for plan in plans if plan['id'] == plan_id), None)

def get_common_metrics():
    total_users = len(users)
    total_plans = len(plans)
    return total_users, total_plans
```

Step 4: Define views and templates

Open the `analyzer/views.py` file and create a view function that computes the common metrics and renders them in a template:

```python
from django.shortcuts import render
from .models import get_common_metrics

def metrics_view(request):
    total_users, total_plans = get_common_metrics()
    return render(request, 'metrics.html', {'total_users': total_users, 'total_plans': total_plans})
```

Step 5: Create the template

Create a new directory named `templates` inside the `analyzer` app directory. Then, create a new file named `metrics.html` inside the `templates` directory and add the following content:

```html
<!DOCTYPE html>
<html>
<head>
    <title>User and Plan Metrics</title>
</head>
<body>
    <h1>Common Metrics</h1>
    <p>Total Users: {{ total_users }}</p>
    <p>Total Plans: {{ total_plans }}</p>
</body>
</html>
```

Step 6: Configure URLs

Open the `analytics_service/urls.py` file and configure the URL for the metrics view:

```python
from django.contrib import admin
from django.urls import path
from analyzer.views import metrics_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('metrics/', metrics_view, name='metrics'),
]
```

Step 7: Run the server

Start the development server and view the metrics page in your web browser:

```bash
python manage.py runserver
```

Visit `http://127.0.0.1:8000/metrics/` in your web browser, and you should see the total number of users and plans displayed on the page.

## Phase Two - Install Kubernetes and Helm
To have a running Kubernetes cluster and Helm installed, you have several options depending on your local development environment or your target deployment environment.

I'll provide instructions for setting up a Kubernetes cluster and installing Helm on a local environment and on cloud platforms like Google Kubernetes Engine (GKE) and Amazon Elastic Kubernetes Service (EKS). However in this tutorial, I used my local environment.

1. Local Development Environment (Minikube):

For local development, you can use Minikube, which runs a single-node Kubernetes cluster on your local machine.

a. Install Minikube:

Follow the installation guide for your operating system from the official Minikube documentation: https://minikube.sigs.k8s.io/docs/start/

b. Start Minikube:

After installing Minikube, start the cluster by running the following command:

```bash
minikube start
```

If Minikube is not working on your Windows machine, you can try using Docker Desktop with Kubernetes enabled as an alternative.

Here's how you can set up Kubernetes using Docker Desktop on Windows:

Step 1: Install Docker Desktop

If you don't have Docker Desktop installed, download and install it from the official Docker website: https://www.docker.com/products/docker-desktop

Step 2: Enable Kubernetes in Docker Desktop

1. After installing Docker Desktop, open it from the system tray icon.

2. Go to "Settings" (gear icon) > "Kubernetes."

3. Check the "Enable Kubernetes" checkbox to enable Kubernetes on Docker Desktop.

4. Click "Apply & Restart" to save the settings and restart Docker Desktop.

Step 3: Verify Kubernetes Installation

Once Docker Desktop is restarted and Kubernetes is enabled, you can verify the Kubernetes installation by opening a command prompt or PowerShell and running the following command:

```bash
kubectl version
```
You should see the version information for both the client and server components of Kubernetes.


2. Google Kubernetes Engine (GKE):

If you prefer using a managed Kubernetes service on Google Cloud Platform, you can use Google Kubernetes Engine (GKE).

a. Create a GKE Cluster:

Follow the steps outlined in the official GKE documentation to create a Kubernetes cluster: https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-cluster

b. Install the Google Cloud SDK:

Install the Google Cloud SDK on your local machine: https://cloud.google.com/sdk/docs/install

c. Configure GKE Credentials:

After creating the GKE cluster, configure your local machine to authenticate with the cluster:

```bash
gcloud container clusters get-credentials CLUSTER_NAME --zone=ZONE --project=PROJECT_ID
```

Replace `CLUSTER_NAME`, `ZONE`, and `PROJECT_ID` with your specific values.

3. Amazon Elastic Kubernetes Service (EKS):

If you prefer using a managed Kubernetes service on Amazon Web Services, you can use Amazon Elastic Kubernetes Service (EKS).

a. Create an EKS Cluster:

Follow the steps outlined in the official EKS documentation to create a Kubernetes cluster: https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html

b. Install the AWS CLI:

Install the AWS CLI on your local machine: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html

c. Configure EKS Credentials:

After creating the EKS cluster, configure your local machine to authenticate with the cluster:

```bash
aws eks --region REGION update-kubeconfig --name CLUSTER_NAME
```

Replace `REGION` and `CLUSTER_NAME` with your specific values.

4. Installing Helm:

Once you have a running Kubernetes cluster, you can proceed to install Helm, which is the package manager for Kubernetes.

a. Install Helm:

Follow the installation instructions provided on the Helm website for your specific operating system: https://helm.sh/docs/intro/install/

After following the above steps, you should have a running Kubernetes cluster and Helm installed on your local machine or cloud environment. We can now use Helm to deploy applications to our Kubernetes cluster.

## Phase three - Dockerize the application and push to docker hub

- Create a `Dockerfile` for node in the root of the express applications application:

```Dockerfile
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

- Create a `Dockerfile` for node in the root of the django application. It should sit in the same level as the manage.py file:

```Dockerfile
FROM python:3.8

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

```

```
#!/bin/bash

# Function to build, run, and push a Docker image
build_run_push() {
  app_name=$1
  dockerfile_path=$2
  tag=$3
  port=$4

  echo "----------------------------------------------------------------------"
  echo "----------------------------------------------------------------------"
  echo "----------------------------------------------------------------------"
  echo "Building, running, and pushing $app_name Docker image... on port $port"

  # Build the Docker image
  docker build -t "$app_name:$tag" -f "$dockerfile_path" .

  echo "----------------------------------------------------------------------"
  echo "----------------------------------------------------------------------"
  echo "----------------------------------------------------------------------"
  echo "Built $app_name Docker image on port $port"

  # Run the Docker container (optional)
  # docker run -d -p "$port:$port" "$app_name:$tag"

  # Tag the image for Docker Hub
  docker tag "$app_name:$tag" "<your docker username>/$app_name:$tag"

  echo "----------------------------------------------------------------------"
  echo "----------------------------------------------------------------------"
  echo "----------------------------------------------------------------------"
  echo "Tagged $app_name Docker image on port $port"

  # Push the image to Docker Hub
  docker push "<your docker username>/$app_name:$tag"

  echo "----------------------------------------------------------------------"
  echo "----------------------------------------------------------------------"
  echo "----------------------------------------------------------------------"
  echo "Pushed $app_name Docker image on port $port as <your docker username>/$app_name:$tag"
}

# Build, run, and push the images for the three applications
build_run_push "helm-auth" "./authentication_service/Dockerfile" "latest" "3990"
build_run_push "helm-analytics" "./analytics_service/analytics_service/Dockerfile" "latest" "8000"
build_run_push "helm-plans" "./plans_service/Dockerfile" "latest" "3991"

# Output the URLs to the Docker repository

echo "----------------------------------------------------------------------"
echo "----------------------------------------------------------------------"
echo "----------------------------------------------------------------------"
echo "Docker repository URLs:"
echo "Helm Auth: docker.io/<your docker username>/helm-auth:latest"
echo "Helm Analytics: docker.io/<your docker username>/helm-analytics:latest"
echo "Helm Plans: docker.io/<your docker username>/helm-plans:latest"

```

## Phase four - add helm charts

1. Create and deploy helm chart for the Express TypeScript authentication application::

Step 1: Set up Helm chart structure

In your project directory, create a new directory called `helm` and navigate into it:

```bash
mkdir helm
cd helm
```

Create a new Helm chart named `helm-auth`:

```bash
helm create helm-auth
```

This command will generate the basic directory structure and template files for the Helm chart.

Step 3: Modify the Helm chart

Open the `helm-auth` Helm chart directory and update the following files:

a. `Chart.yaml`: Update the chart metadata with appropriate information:

```yaml
# Chart.yaml
apiVersion: v2
name: helm-auth
version: 1.0.0
description: A Helm chart for the Express TypeScript authentication application
```

b. `values.yaml`: Define the default values for your application:

```yaml
# values.yaml
replicaCount: 1

image:
  repository: your-docker-repo/helm-auth
  tag: latest
  pullPolicy: IfNotPresent

service:
  type: ClusterIP
  port: 3990

ingress:
  enabled: false
  annotations: {}
  hosts:
    - host: chart-example.local
      paths: ["/"]

resources:
  limits:
    cpu: 100m
    memory: 128Mi
  requests:
    cpu: 100m
    memory: 128Mi

nodeSelector: {}

tolerations: []

affinity: []
```

Step 4: Deploy the Helm chart

Before deploying the Helm chart, make sure you have a running Kubernetes cluster and Helm installed.

In the `helm` directory, deploy the Helm chart with the following command:

```bash
helm install helm-auth ./helm-auth
```

This command will create a new Kubernetes deployment with the Express application using the values defined in `values.yaml`.

Step 5: Access the application

After the deployment is successful, you can access the application by exposing the service. By default, the service is configured as `ClusterIP`, meaning it's only accessible within the cluster. To expose the service externally, update the `service.type` in `values.yaml` to `NodePort` or `LoadBalancer`.

For example, to use `NodePort`, update `values.yaml`:

```yaml
# values.yaml
service:
  type: NodePort
  port: 3990
```

Then, upgrade the Helm release with the new configuration:

```bash
helm upgrade helm-auth ./helm-auth
```

After the upgrade, you can get the NodePort assigned to the service by running:

```bash
kubectl get svc helm-auth
```

You can access the application by navigating to `http://<node-ip>:<node-port>` in your browser, where `<node-ip>` is the IP of one of your cluster nodes, and `<node-port>` is the port you obtained from the `kubectl get svc` command.

finally: repeat this process for the plans service.

2. To create and deploy a Helm chart for the Django Python analytics application:

Step 1: Set up Helm chart structure

In your project directory, create a new directory called `helm` and navigate into it:

```bash
mkdir helm
cd helm
```

Create a new Helm chart named `helm-analytics`:

```bash
helm create helm-analytics
```

This command will generate the basic directory structure and template files for the Helm chart.

Step 2: Modify the Helm chart

Open the `helm-analytics` Helm chart directory and update the following files:

a. `Chart.yaml`: Update the chart metadata with appropriate information:

```yaml
# Chart.yaml
apiVersion: v2
name: helm-analytics
version: 1.0.0
description: A Helm chart for the Django Python analytics application
```

b. `values.yaml`: Define the default values for your application:

```yaml
# values.yaml
replicaCount: 1

image:
  repository: your-docker-repo/helm-analytics
  tag: latest
  pullPolicy: IfNotPresent

service:
  type: ClusterIP
  port: 8000

ingress:
  enabled: false
  annotations: {}
  hosts:
    - host: chart-example.local
      paths: ["/"]

resources:
  limits:
    cpu: 100m
    memory: 128Mi
  requests:
    cpu: 100m
    memory: 128Mi

nodeSelector: {}

tolerations: []

affinity: []

# Database configuration (using PostgreSQL as an example)
# database:
#   enabled: true
#   postgresqlUsername: django_user
#   postgresqlPassword: django_password
#   postgresqlDatabase: django_db
  # You can customize other PostgreSQL parameters as needed
```

Step 3: Deploy the Helm chart

In the `helm` directory, deploy the Helm chart with the following command:

```bash
helm install helm-analytics ./helm-analytics
```

This command will create a new Kubernetes deployment with the Django application using the values defined in `values.yaml`.

Step 4: Access the application

After the deployment is successful, you can access the Django analytics application by exposing the service. By default, the service is configured as `ClusterIP`, meaning it's only accessible within the cluster. To expose the service externally, update the `service.type` in `values.yaml` to `NodePort` or `LoadBalancer`.

For example, to use `NodePort`, update `values.yaml`:

```yaml
# values.yaml
service:
  type: NodePort
  port: 8000
```

Then, upgrade the Helm release with the new configuration:

```bash
helm upgrade helm-analytics ./helm-analytics
```

After the upgrade, you can get the NodePort assigned to the service by running:

```bash
kubectl get svc helm-analytics
```

You can access the Django analytics application by navigating to `http://<node-ip>:<node-port>` in your browser, where `<node-ip>` is the IP of one of your cluster nodes, and `<node-port>` is the port you obtained from the `kubectl get svc` command.
