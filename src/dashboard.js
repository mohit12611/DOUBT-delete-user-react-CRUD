import React, { useState } from 'react';
import Cards from './cards';

function Dashboard() {
    let cards = [
        {
            tittle: "EARNINGS (MONTHLY)",
            currency: "$",
            value: 40000,
            icon: "fa-calendar",
            color: "primary",
            isProgress: false
        },
        {
            tittle: "EARNINGS (ANNUAL)",
            currency: "$",
            value: 215000,
            icon: "fa-dollar-sign",
            color: "success",
            isProgress: false
        },
        {
            tittle: "TASKS",
            value: 50,
            icon: "fa-clipboard-list",
            color: "info",
            isProgress: true
        },
        {
            tittle: "PENDING REQUESTS",
            value: 18,
            icon: "fa-comments",
            color: "warning",
            isProgress: false
        }

    ]

    let [value, setValue] = useState("");

    let handleClickOnCard = (element) => {
        setValue(element);
    }

    return (

        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>

            <div className="row">
                {
                    cards.map((elementCard) => {
                        return <Cards data={elementCard} handleClick={handleClickOnCard} />
                    })
                }

            </div>
            <div>
                <h3>{value}</h3>
            </div>

        </>

    )
}

export default Dashboard;