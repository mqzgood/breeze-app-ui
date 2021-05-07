import BreezeCfxIco from '../../static/mining/breeze-cfx.png';
import CFXIco from '../../static/mining/CFX.png';
import BreezeIco from '../../static/mining/breeze.png';
import UsdtIco from '../../static/mining/usdt.png';

//
const miningLiquidity  = [
    {
        token: "0x8e2f2e68eb75bb8b18caafe9607242d4748f8d98",
        pool: "0x8c77cc627feeedf38b8f2288d701b98bd9be1b83",
        name: "BREEZE-CFX",
        img: BreezeCfxIco,
        do: 2000,
        apy:1688,
        tvl:1097263348.55
    }
]
 
//
const anonymityPools  = [
    {
        token: "0x8e2f2e68eb75bb8b18caafe9607242d4748f8d98",
        pool: "0x8c77cc627feeedf38b8f2288d701b98bd9be1b83",
        name: "CFX",
        img: CFXIco,
        do: 2000,
        apy:999,
        tvl:796213867.12
    },
    {
        token: "0x8e2f2e68eb75bb8b18caafe9607242d4748f8d98",
        pool: "0x8c77cc627feeedf38b8f2288d701b98bd9be1b83",
        name: "cUSDT",
        img: UsdtIco,
        do: 2000,
        apy:666,
        tvl:87569916.23
    },
    {
        token: "0x8e2f2e68eb75bb8b18caafe9607242d4748f8d98",
        pool: "0x8c77cc627feeedf38b8f2288d701b98bd9be1b83",
        name: "BREEZE",
        img: BreezeIco,
        do: 2000,
        apy:5678,
        tvl:67789909.77
    }
]

export { miningLiquidity,anonymityPools }
