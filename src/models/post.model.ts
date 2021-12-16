import {Schema, model} from 'mongoose';

 export interface PostDocumentType {
    author: String;
    title: String;
    content: String;
}

const PostDocument = new Schema<PostDocumentType>({
    author: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
})

export const PostModel = model<PostDocumentType>('Post', PostDocument);