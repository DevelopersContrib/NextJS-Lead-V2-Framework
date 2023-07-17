"use client";

import { useState} from "react";
import Form from "./Form";
import Thanku from "./Thanku";

const Container = ({domain}) => {
const [success, setSuccess] = useState(false);
  return (
    <>
    {success ? <Thanku domain={domain} />: <Form domain={domain} setSuccess={setSuccess}/>}
  </>
  )
}

export default Container