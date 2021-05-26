import React from 'react'
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMysql } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiCsswizardry } from 'react-icons/si';
import { BsFillBootstrapFill } from 'react-icons/bs';

export default function Footer() {
    return (
        <div class="p-5 align-self-center text-center" id="icon">
            <FaReact size={40} />
            <IoLogoJavascript size={40} />
            <SiMysql size={40} />
            <SiMongodb size={40} />
            <AiFillHtml5 size={40} />
            <SiCsswizardry size={40} />
            <FaNode size={40} />
            <BsFillBootstrapFill size={40} />
        </div>
    )
}
