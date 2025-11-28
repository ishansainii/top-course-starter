import React from 'react'
import Card from './Card';

const Cards = ({courses}) => {
    const allCourses = [];

    const getCourses = () => {
        Object.values(courses).forEach(
            (courseCategory) => {
                courseCategory.forEach(
                    (course) => {
                        allCourses.push(course)
                    }
                )
            }
        )

    }

    return (
        <div>
            {
                allCourses.map((course)=>{
                    return (<Card key={course.id} course={course}/>)
                })
            }
        </div>
    )
}

export default Cards