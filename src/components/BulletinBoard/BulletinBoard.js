import { useEffect, useState } from 'react';
import QuestionData from '../../data/QuestionData.json'
import ReactPost from '../Post/ReactPost';

import classes from './BulletinBoard.module.css'

function Bulletinboard(){
    const [questionList, setQuestionList] = useState([])

    useEffect(() => {

        const dataList = JSON.parse(JSON.stringify(QuestionData));
        setQuestionList(dataList.questions)

    }, [])
    return <div className={classes['bulletinboard-container']}>
        {questionList.map(question => <ReactPost key={question.questionId} />)}
    </div>
}

export default Bulletinboard;