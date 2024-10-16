# Cloud Cost Optimization Using Boto3

## Introduction

As businesses migrate from on-premises servers to the cloud, they often face challenges related to maintaining cost efficiency. Despite the advantages of cloud computing, companies can still incur high costs if resources are not managed properly. This project aims to automate the identification and deletion of unused resources within AWS to optimize cloud expenses.

## Project Overview

This project leverages AWS Lambda functions and Boto3 (AWS SDK for Python) to manage and clean up resources that are no longer needed, such as:

- Stale EBS snapshots
- Unused Elastic IPs
- Old Amazon Machine Images (AMIs)
- Unattached EBS volumes

By automating these processes, this project contributes to better cost management in cloud environments.

## Project Structure

```plaintext
cloud-cost-optimization/
│
├── README.md                 # Project documentation
├── requirements.txt          # Python dependencies
├── config/
│   └── settings.json         # Configuration file for customization
├── lambda_functions/
│   ├── delete_snapshots.py   # Deletes stale EBS snapshots
│   ├── unused_ips_cleanup.py # Cleans up unused Elastic IPs
│   ├── old_amis_cleanup.py   # Deletes unused AMIs
│   └── orphan_volumes.py     # Deletes unattached EBS volumes
├── cloudwatch/
│   └── scheduled_events.json # CloudWatch Events to trigger Lambda functions
├── infrastructure/
│   └── cloudformation.yml    # CloudFormation template to set up Lambda, IAM roles
└── other_files/              # Any additional scripts or files you may have
    ├── additional_script.py
    └── utils.py
```
### Folder Descriptions (Continued)

- **cloudwatch/scheduled_events.json**: Defines the CloudWatch Events that trigger the Lambda functions, ensuring automated and timely cleanup of unused resources.
- **infrastructure/cloudformation.yml**: A CloudFormation template that sets up the necessary AWS infrastructure, including Lambda functions, IAM roles, and permissions, streamlining the deployment process.
- **other_files/**: Contains any additional scripts or utilities that support the main functions of the project.
  - **additional_script.py**: Supplementary script for additional tasks related to cost optimization.
  - **utils.py**: Utility functions used across multiple Lambda functions for common operations.

## Lambda Functions Overview

### 1. `delete_snapshots.py`
This Lambda function identifies and deletes stale EBS snapshots that are no longer associated with active EC2 instances or volumes. It reduces storage costs by removing unnecessary backups.

**Key Features:**
- Fetches all snapshots owned by the account.
- Checks if snapshots are linked to active volumes.
- Deletes snapshots not attached to any existing volume.

### 2. `unused_ips_cleanup.py`
Elastic IPs (EIPs) that are not associated with running instances still incur charges. This function identifies and releases unused EIPs to minimize unnecessary expenses.

**Key Features:**
- Lists all Elastic IPs in the account.
- Checks for association with running EC2 instances.
- Releases IPs that are not currently in use.

### 3. `old_amis_cleanup.py`
Old and unused Amazon Machine Images (AMIs) can accumulate over time, contributing to unexpected storage costs. This function helps manage and delete AMIs that are no longer needed.

**Key Features:**
- Identifies AMIs that are not in use.
- Deregisters the AMIs.
- Deletes associated snapshots of deregistered AMIs.

### 4. `orphan_volumes.py`
Unattached EBS volumes can accumulate storage costs. This function scans for unattached volumes and deletes them to free up space and reduce costs.

**Key Features:**
- Retrieves all unattached EBS volumes.
- Deletes volumes that are no longer linked to any instance.

## CloudWatch Scheduled Events

Scheduled events defined in `cloudwatch/scheduled_events.json` trigger the Lambda functions periodically to ensure ongoing cleanup. These events can be customized to run at specific intervals based on organizational needs.

## Infrastructure Setup with CloudFormation

The `cloudformation.yml` file automates the deployment of all necessary AWS resources. It sets up Lambda functions, IAM roles with the required permissions, and CloudWatch events.

### Key Resources Defined:
- **Lambda Functions**: Configured to perform cleanup tasks with the correct permissions.
- **IAM Roles**: Grant necessary permissions to Lambda functions to interact with AWS resources securely.
- **CloudWatch Events**: Schedule Lambda functions to run automatically without manual intervention.

## Configuration

The `config/settings.json` file allows you to customize parameters like resource tags, retention periods, and specific AWS regions. Modify this file to tailor the cleanup process to your environment.

## Requirements

Ensure that you have Python installed along with the required dependencies listed in `requirements.txt`. You can install them using the following command:

```bash
pip install -r requirements.txt
```
## Conclusion

This project aims to automate cloud cost optimization tasks, helping organizations manage their AWS environments more efficiently by identifying and cleaning up unused resources. By deploying these Lambda functions, you can reduce unnecessary spending and maintain a cleaner, more organized cloud infrastructure.

## Future Improvements

While this project addresses basic cleanup tasks, there are several areas for future enhancements:

- **Enhanced Monitoring**: Integrate with AWS Cost Explorer or AWS Budgets to provide insights and alerts on resource spending.
- **User Notifications**: Set up SNS notifications or email alerts to inform administrators when resources are deleted.
- **Custom Tags Support**: Add support for custom tagging policies to selectively retain resources based on business needs.
- **Advanced Automation**: Incorporate more complex automation scenarios, such as scaling down underused instances during off-hours.

## Troubleshooting

- **Permissions Issues**: Ensure the IAM roles defined in the CloudFormation template have the correct permissions to execute actions on AWS resources.
- **Lambda Execution Errors**: Check the CloudWatch logs for the Lambda functions to identify errors and resolve issues related to resource access or configuration.
- **CloudWatch Event Triggers**: If the functions are not executing as expected, verify the CloudWatch event rules to ensure that triggers are set up correctly.

## Contributing

We welcome contributions to enhance this project. Please fork the repository and submit a pull request with your proposed changes. For significant modifications, consider opening an issue first to discuss the changes.


## Contact

For questions, issues, or suggestions, please reach out:

- **Email**: madhur.cloudevops@gmail.com


---

Happy cost optimizing! 🛠️🚀

