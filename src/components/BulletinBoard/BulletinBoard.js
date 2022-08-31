import { useEffect, useState } from 'react';
import QuestionData from '../../data/QuestionData.json'
import ReactPost from '../Post/ReactPost';

import classes from './BulletinBoard.module.css'

function Bulletinboard(){
    const [questionList, setQuestionList] = useState([])

    useEffect(() => {

        const dataList = JSON.parse(JSON.stringify(QuestionData));
        console.log(dataList)
        setQuestionList(dataList.questions)

    }, []);

    useEffect(() => {console.log('update list')}, [questionList])

    const setPostToLiked = (id, index) => {
        const post = questionList.find(({questionId}) => questionId === id);
        post.postLiked = true;

        const copiedList = [...questionList];
        copiedList.splice(index, post);
        setQuestionList(copiedList)

    }
    return <div className={classes['bulletinboard-container']}>
        {questionList.map((question, index) => <ReactPost key={question.questionId} index={index} {...question} setPostToLiked={setPostToLiked}/>)}
    </div>
}

export default Bulletinboard;