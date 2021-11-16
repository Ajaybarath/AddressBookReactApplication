import axios from 'axios';
import React from 'react';

class AddressBookService extends React.Component {
    baseUrl = `http://localhost:3000/addressbook`;

    addAddress = (data) => {
        console.log(data)
        return axios.post(this.baseUrl , data)
    }

    getAddressBook = () => {
        console.log("getting data");
        return axios.get(this.baseUrl)
    }

    getAddressById = (id) => {
        console.log("getting data by id");
        return axios.get(this.baseUrl + '/' + id)
    }

    updateAddress = (data, id) => {
        console.log(data);
        return axios.put(this.baseUrl + '/' + id, data)
    }

    deleteAddress = (data) => {
        console.log(data);
        return axios.delete(this.baseUrl + '/'+ data)
    }
 }

export default new AddressBookService();