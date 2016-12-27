import { User } from '../models/user.model';

export interface UserHTTP extends User {
  firstname?: any;  
  lastname?: any;
  id: any;
  language: any;
  status: any;
}