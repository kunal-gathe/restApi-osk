import express from 'express'
import { getAllProduct, getAllProductTesting } from '../controller/controller.js'

const router = express.Router()

router.route('/').get(getAllProduct)
router.route('/testing').get(getAllProductTesting)

export default router

