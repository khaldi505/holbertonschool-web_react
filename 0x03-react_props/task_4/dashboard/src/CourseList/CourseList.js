import React, { Component } from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css'

function CourseList(){

        return(
        <table id='CourseList'>
            <thead>
            <CourseListRow isHeader={true} textFirstCell="Available courses"></CourseListRow>
            <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}></CourseListRow>
            </thead>
            <tbody>
                <CourseListRow textFirstCell="ES6"  textSecondCell="60"></CourseListRow> 
                <CourseListRow textFirstCell="Webpack"  textSecondCell="20" ></CourseListRow>
                <CourseListRow textFirstCell="React"  textSecondCell="40" ></CourseListRow>
            </tbody>
            </table>)
    }


export default CourseList;