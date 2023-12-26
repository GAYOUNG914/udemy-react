import './ExpenseItem.css'

  function ExpenseDate(props){

  //자바스크립트 넣는 방법
  //.toLocaleString(~어쩌구) 는 원래 자바스크립트 문법임
  //.getFullYear 도 원래 자바스크립트 문법임
  const month = props.date.toLocaleString('en-US', {month: 'long' });
  const day = props.date.toLocaleString('en-US', {day: '2-digit' });
  const year = props.date.getFullYear();

  return(
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{day}</div>
      <div className="expense-date__day">{year}</div>
    </div>
  )

  }

  export default ExpenseDate;