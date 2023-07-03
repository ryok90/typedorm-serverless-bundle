import "reflect-metadata";
import { DocumentClientV3 } from "@typedorm/document-client";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

new DocumentClientV3(new DynamoDBClient({}));

const hello = async (event: any) => {
  return {
    statusCode: 200,
    body: "success",
  };
};

export default hello;
