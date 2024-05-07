import styled from "styled-components";

function App() {
  const today = new Date();
  const birthDate = new Date("2005-10-12");

  // get the number of weeks between today and the birth date
  const weeks = Math.floor(
    (today.getTime() - birthDate.getTime()) / 1000 / 60 / 60 / 24 / 7
  );

  return (
    <StyledContainer>
      <div>
        <h1>Limtaehyun's Life Calendar</h1>
        <p style={{ fontSize: "20px", color: "gray" }}>
          Weeks you've lived: {weeks}
        </p>
        <p style={{ fontSize: "20px", color: "red" }}>
          Weeks you have left: {4680 - weeks}
        </p>
        <StyledTable>
          {Array.from({ length: weeks }, (_, i) => (
            <Week key={i} style={{ backgroundColor: "black" }}></Week>
          ))}
          {Array.from({ length: 4680 - weeks }, (_, i) => (
            <Week key={i}></Week>
          ))}
        </StyledTable>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100vh;
  margin: 0 auto;
  display: flex;
`;

const StyledTable = styled.div`
  width: 90px;
  height: 52px;
  display: grid;
  grid-template-columns: repeat(90, 1fr);
  grid-template-rows: repeat(52, 1fr);
  grid-auto-flow: column;
  gap: 3px;
`;

const Week = styled.div`
  border: 1px solid gray;
  width: 10px;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
