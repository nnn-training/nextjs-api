interface CardProps {
  children: React.ReactNode;
}

interface CountryCapitalProps {
  country: string;
  capital: string;
}

const countryCapitals: { country: string; capital: string }[] = [
  {country: '日本', capital: '東京'},
  {country: 'アメリカ', capital: 'ワシントンD.C.'},
  {country: '中国', capital: '北京'},
  {country: 'イギリス', capital: 'ロンドン'}
];

function Card(props: CardProps) {
  return (
    <div
      style={{
        borderRadius: 5,
        boxShadow: "0 0 3px #555",
        display: "inline-block",
        padding: "3px 5px",
        margin: "3px 5px",
      }}
    >
      {props.children}
    </div>
  );
};

function CountryCapitalItem(props: CountryCapitalProps) {
  return (
    <>
      <div
        style={{
          fontSize: "0.7em",
          lineHeight: "1em",
        }}
      >
        {props.country}
      </div>
      <div
        style={{
          fontSize: "1.1em",
          fontWeight: "bold",
          lineHeight: "1em",
        }}
      >
        {props.capital}
      </div>
    </>
  );
};

export default function CountryCapitalList() {
  return (
    <div>
      <h1>国の首都リスト</h1>
      <div>
        {countryCapitals.map(countryCapital => {
          return (
            <Card key={countryCapital.country}>
              <CountryCapitalItem
                country={countryCapital.country}
                capital={countryCapital.capital}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
}