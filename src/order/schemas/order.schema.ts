import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from "mongoose";
import { v4 as uuidv4 } from 'uuid';
import mongoose from "mongoose";

export type OrderDocument = Order & Document;

export interface OrderProduct {
  id: string;
  name: string;
}

@Schema({
  timestamps: true,
  id: true,
  versionKey: false,
  toJSON: {
    transform: function(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
    },
  },
})
export class Order {

  @Prop({
    required: true,
    default: uuidv4,
  })
  _id: uuidv4;

  @Prop({
    required: true
  })
  name: string;

  @Prop({
    required: true
  })
  phone: string;

  @Prop({
  })
  description: string;

  @Prop({
    required: true,
    type:[{
      quantity: { type: Number, required: true },
      product: {
        id: { type: String, required: true },
        name: { type: String, required: true  }
      },
      _id : false
    }]
  })
  products: { quantity: number; product: OrderProduct }[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
