import React from 'react';
import axios from 'axios';

export default async function VijestiGet(){
    let res = await fetch('http://localhost:8000/vijesti');
    let json = await res.json();
    return json;
}