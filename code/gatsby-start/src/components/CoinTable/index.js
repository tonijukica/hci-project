import React from "react";
import styles from "./styles.module.css";

export default(children) => (
    <table className = {styles.coinTable}>
        <thead>
            <tr>
                <th className = {styles.coinName}>
                    Name
                </th>
                <th className = {styles.coinChange}>
                    Daily change
                </th>
                <th className = {styles.coinPrice}>
                    Price
                </th>
                <th className = {styles.coinVolume}>
                    Volume
                </th>
                <th className = {styles.coinMarketCap}>
                    Market cap
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    Bitcoin
                </td>
                <td>
                    -6%
                </td>
                <td>
                    4000$
                </td>
                <td>
                    2000000$
                </td>
                <td>
                    17,922290 $
                </td>
            </tr>
            <tr>
                <td>
                    Bitcoin
                </td>
                <td>
                    -6%
                </td>
                <td>
                    4000$
                </td>
                <td>
                    2000000$
                </td>
                <td>
                    17,922290 $
                </td>
            </tr>
            <tr>
                <td>
                    Bitcoin
                </td>
                <td>
                    -6%
                </td>
                <td>
                    4000$
                </td>
                <td>
                    2000000$
                </td>
                <td>
                    17,922290 $
                </td>
            </tr>

        </tbody>
    </table>
);