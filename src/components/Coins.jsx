import React, { useEffect } from "react";
import axios from "axios";
import CoinCard from "./CoinCard";
import { server } from "../index";
import { Container, HStack, Button, RadioGroup, Radio } from "@chakra-ui/react";
import { useState } from "react";
import Loading from "./Loading";
import ErrorComponent from "./ErrorComponent";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(3);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        console.log(data);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;

  return (
    <>
      <Container maxW={"container.xl"}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <RadioGroup  value={currency}  onChange={setCurrency} p={"8"}>
              <HStack spacing={"4"} justifyContent={"center"}>
                <Radio value="inr">INR</Radio>
                <Radio value="eur">EUR</Radio>
                <Radio value="usd">USD</Radio>
              </HStack>
            </RadioGroup>
            
            <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
              {coins.map((i) => (
                <CoinCard
                  key={i.id}
                  id={i.id}
                  price={i.current_price}
                  name={i.name}
                  img={i.image}
                  symbol={i.symbol}
                  currencySymbol={currencySymbol}
                />
              ))}
            </HStack>
            <HStack
              w={"full"}
              overflow={"auto"}
              p={"8"}
            >
              {btns.map((item, index) => (
                <Button
                  key={index}
                  bgColor={"blackAlpha.900"}
                  color={"white"}
                  onClick={() => changePage(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}
              {/* <Button
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(2)}
              >
                2
              </Button> */}
            </HStack>
          </>
        )}
      </Container>
    </>
  );
};

export default Coins;
