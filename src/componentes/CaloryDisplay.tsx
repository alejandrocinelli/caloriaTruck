
type caloriaProps = {
    calories : number,
    text : string
}

const CaloryDisplay = ({calories , text}: caloriaProps ) => {
  return (
    <p className=" text-white font-bold rounded-full text-center grid grid-cols-1 gap-3 ">
            <span className="  text-6xl font-black text-orange">
                {calories}</span>
                {text}
        </p>
  )
}

export default CaloryDisplay