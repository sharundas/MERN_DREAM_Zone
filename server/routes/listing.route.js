import express from 'express';
import { createListing, UpdatedListing,deleteListing, getListing, getListings } from '../controllers/listing.controller.js';
import {verifyToken} from '../utils/verifyUser.js'


const router = express.Router();


router.post('/create', verifyToken, createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, UpdatedListing);
router.get('/get/:id', getListing);
router.get('/get', getListings)




export default router;
