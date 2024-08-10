import React from 'react'
import { useState } from 'react';
import ContactTable from './ContactTable';
import SweetAlert from './SweetAlert';
import Modal from './Modal';

function DashboardContactsDisplay({ heading, data, sendData }) {

    const [showModal, setShowModal] = useState(false);
    const [contactId, setContactId] = useState();
    const [showPopUp, setShowPopUp] = useState(false);

    return (
        <>
            <div className='flex justify-start p-5 items-center rounded-lg font-semibold'>{heading}</div>
            <div>
                {data != null &&
                    <ContactTable
                        data={data}
                        setShowModal={setShowModal}
                        setContactId={setContactId}
                        setShowPopUp={setShowPopUp}
                    />
                }
            </div>
            {showModal && <Modal
                onClose={() => setShowModal(false)}
                api={`http://localhost:8080/user/contact/view/${contactId}`}
            />}
            {showPopUp && <SweetAlert
                onClose={() => setShowPopUp(false)}
                api={`http://localhost:8080/user/contact/delete/${contactId}`}
                message='Are you sure to delete the Contact?'
                sendData={sendData}
            />}
        </>
    )
}

export default DashboardContactsDisplay