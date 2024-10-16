import json
import boto3
from decimal import Decimal

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('serverless-web-appliaction-project')

class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, Decimal):
            return int(o)
        return super(DecimalEncoder, self).default(o)

def lambda_handler(event, context):
    # Fetch the item with ID = 0
    response = table.get_item(Key={'ID': 0})
    
    # Increment the Views
    Views = response['Item']['Views'] + 1
    
    # Update the item with incremented Views
    table.put_item(Item={'ID': 0, 'Views': Views})
    
    return {
        'statusCode': 200,
        'body': json.dumps({'Views': Views}, cls=DecimalEncoder)
    }
