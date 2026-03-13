import { OnModuleInit } from '@nestjs/common';
import * as admin from 'firebase-admin';
export declare class DatabaseService implements OnModuleInit {
    firestore: admin.firestore.Firestore;
    onModuleInit(): Promise<void>;
    collection(name: string): admin.firestore.CollectionReference;
}
