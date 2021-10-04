
import Title from "../../../../../StyledComponents/Title";
import Div from "./StyledSelector";
import Init from "./initSelect";
import Select from "react-select";
import { useDispatch, useSelector} from "react-redux";
import { SelectSelector, setSelect } from "../../../../../redux/FilterCleanersBook/FilterClianerBook";

const options = Init;

const styles = {
    option:(provided,state) => ({
        ...provided,
        color: state.isSelected?"white":"#F9D859",
        paddingLeft:"15px",
        fontSize: "1.6rem",
        fontWeight: "bold",
        cursor:"pointer",
        width:"20rem",
        background:state.isFocused?"#bbcdff":"#6882ef",
    }),
    menu: (provided,state) => ({
        ...provided,
        width:"20rem",
        background: "#6882ef",
        margin:"0"
        
    }),
}


export default function Selector(){
    const dispatch = useDispatch()
    const {selectClean} = useSelector(SelectSelector)

    return <Div>
    <Title color={"white"}>Book now</Title>
    <Select options={options}
    styles={styles}
    defaultValue={selectClean === options[0].value
    ?options[0]
    :selectClean === options[1].value
    ?options[1]
    :selectClean === options[2].value
    ?options[2]
    :options[3]}
    isSearchable={false}
    className="testing my-4"
    classNamePrefix="control"
    onChange={e => {
        dispatch(setSelect({select:e.value}))
    }}
    />
    </Div>
}