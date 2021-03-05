import React, {useState} from 'react'
import { CheckBox } from "react-native-elements";

export default function CustomCheckBox({text}) {
  const [isChecked, setChecked] = useState(false);
  return (
    <CheckBox textStyle={{fontSize:10}} size={15} iconRight title={text} onPress={() => setChecked(bool => !bool)} center checked={isChecked} />
  )
}
