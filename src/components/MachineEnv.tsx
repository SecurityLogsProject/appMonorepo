'use client'
import React from "react";

export default function MachineEnv({ machineDetails }: any) {
    const origin = window.location.origin

    return (
        <pre className='bg-gray-700 mx-4 my-1 text-white p-2'>
            <p>TOKEN = '{machineDetails.machineKey}'</p>
            <p>URL = '{origin}/api/logs'</p>
            <p>MACHINE_ID = '{machineDetails.id}'</p>
        </pre>
    )
}