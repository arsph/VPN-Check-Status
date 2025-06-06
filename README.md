# VPN Check Status

A React-based web application that allows users to check their VPN connection status and view detailed information about their network connection.

Demo @ `https://v2check.vercel.app`

## Features

- Real-time VPN connection status monitoring
- Detailed network information display
- Responsive design for all devices
- Docker containerization for easy deployment
- AWS deployment support

## Prerequisites

- Node.js (v20 or higher)
- npm (v10 or higher)
- Docker
- AWS CLI (for AWS deployment)
- Terraform (for infrastructure as code)

## Local Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/arsph/vpn-check-status.git
   cd vpn-check-status
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Docker Setup

1. Build the Docker image:
   ```bash
   docker build -t vpn-check-status .
   ```

2. Run the container:
   ```bash
   docker run -d -p 80:80 vpn-check-status
   ```

3. Access the application at `http://localhost`

## AWS Deployment

### Prerequisites

1. AWS CLI configured with appropriate credentials
2. Terraform installed
3. Docker installed and running

### Deployment Steps

1. Configure AWS credentials:
   ```bash
   aws configure
   ```

2. Initialize Terraform:
   ```bash
   terraform init
   ```

3. Review the deployment plan:
   ```bash
   terraform plan
   ```

4. Apply the infrastructure:
   ```bash
   terraform apply
   ```

5. Build and push the Docker image to ECR:
   ```bash
   aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 787434278367.dkr.ecr.eu-central-1.amazonaws.com
   docker build -t vpn-check-status .
   docker tag vpn-check-status:latest 787434278367.dkr.ecr.eu-central-1.amazonaws.com/vpn-check-status:latest
   docker push 787434278367.dkr.ecr.eu-central-1.amazonaws.com/vpn-check-status:latest
   ```

### Infrastructure Components

The AWS infrastructure includes:
- EC2 instance (t2.nano)
- ECR repository for Docker images
- VPC with public subnet
- Security group with HTTP access
- Internet Gateway
- Route Table

## Project Structure

```
vpn-check-status/
├── src/
│   ├── components/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── Dockerfile
├── nginx.conf
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React
- Vite
- Docker
- AWS
- Terraform
