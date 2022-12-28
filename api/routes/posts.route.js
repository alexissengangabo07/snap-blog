import { Router } from 'express';
import {
    addPostController, deletePostController,
    getPostController, getPostsController,
    updatePostController
} from '../controllers/posts.controller.js';

const router = Router();

router.get('/', getPostsController);
router.get('/:id', getPostController);
router.post('/', addPostController);
router.delete('/:id', deletePostController);
router.put('/:id', updatePostController);

export default router;