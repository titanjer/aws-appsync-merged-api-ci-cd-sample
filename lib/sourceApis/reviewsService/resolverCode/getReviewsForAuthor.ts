import {Context, util} from '@aws-appsync/utils';
import {defaultResponseHandler} from "./commonUtils";

export function request(ctx) {
    return {
        operation: 'Query',
        query: {
            expression: '#authorId = :authorId',
            expressionNames: {
                '#authorId': 'authorId'
            },
            expressionValues: {
                ':authorId': util.dynamodb.toDynamoDB(ctx.source.id)
            }
        },
        index: 'review-author-index',
        limit: 25,
        scanIndexForward: true,
        select: 'ALL_ATTRIBUTES'
    }
}

export function response(ctx: Context) {
    return defaultResponseHandler(ctx);
}