import React from 'react'

const getAllData = () => {
    fetch('localhost:4000/api/collections').then(() =>
        console.log(response.json())

}

const CollectionList = () => {
    getAllData();
    return (
        <div>CollectionList</div>
    )
}

export default CollectionList