import boto3

def lambda_handler(event, context):
    ec2 = boto3.client('ec2')
    response = ec2.describe_addresses()

    for address in response['Addresses']:
        if 'InstanceId' not in address:
            ec2.release_address(AllocationId=address['AllocationId'])
            print(f"Released unused Elastic IP: {address['PublicIp']}")

