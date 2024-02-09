export type CheckBoxProps = {
    checked?: boolean;
}

const Checkbox: React.FC<CheckBoxProps> = (props: CheckBoxProps) => {
    return (
        <div className={`group  w-[20px] h-[20px] rounded-full bg-gray border-2 hover:border-checkBoxBorderColor ${props.checked && 'border-checkBoxBorderColor'}`}>
            <img src="../../../../icon-check.svg" alt="check" className={`relative top-[3px] left-[3px] p-0  z-10 group-hover:block ${props.checked ? 'block' : 'hidden'}`} />
        </div>
    );
}

export default Checkbox;