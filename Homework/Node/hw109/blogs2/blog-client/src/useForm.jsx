import { useState } from "react";

export default function useForm(defaults) {
  const [state, setState] = useState(defaults);

  return [state,
    /*setState*/
    e => {
      setState({
        ...state,
        [e.target.name]: e.target.value
      });
    }
  ];
}
