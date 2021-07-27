import React from "react";

function mySkills(props) {

    return props.techItems.map(technology => {
            return <li className="projToolsTech">{technology}</li>
    })
}

export default mySkills;