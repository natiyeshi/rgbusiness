export interface ITestimonial {
  name: string;
  message: string;
  createdAt?: string; // timestamps are optional because they are auto-generated by Mongoose
  updatedAt?: string;
  _id : string,
}