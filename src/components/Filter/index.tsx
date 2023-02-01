import { Button } from "../Button"
import "./styles.scss"
export const FilterTable = () => {
    return (
        <div className="filter-container">
            <section className="input-containers">
                <label htmlFor="organization">Organization</label>
                <select name="" id="">
                    <option value="1">Select</option>
                    {/* <option value="1">1</option> */}
                </select>
            </section>
            <section className="input-containers">
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="User" />
            </section> <section className="input-containers">
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Email" />
            </section>
            <section className="input-containers">
                <label htmlFor="organization">Date</label>
                <input type="text" placeholder="Date" onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                />
            </section> <section className="input-containers">
                <label htmlFor="status">Status</label>
                <select name="" id="">
                    <option value="1">1</option>
                    <option value="1">1</option>
                </select>
            </section>
            <section className="btn-wrapper">
                <Button type="reset" btnType="contain" />
                <Button type="submit" btnType="solid" />
            </section>
        </div>
    )
}