/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, editActivity, getActivityById, cleanActivity } from "../../redux/actions";
import { useParams } from "react-router-dom";
import validationForm from "../../helpers/Validations/ValidationForm";
import Loading from "../../components/Loading/Loading";
import stylesForm from "./Edit.module.css";

const Edit = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { countriesCopy, activityDetail, loading } = useSelector((state) => state);
    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
    });
    const [errors, setErrors] = useState({});
    
    useEffect(() => {
        dispatch(getActivityById(id));
        if (!countriesCopy.length) dispatch(getCountries());
        return () => {
            dispatch(cleanActivity());
        };
    }, []);

    useEffect(() => {
        if (activityDetail && activityDetail.id == id) {
            setForm({
                name: activityDetail.name,
                difficulty: activityDetail.difficulty,
                duration: activityDetail.duration,
                season: activityDetail.season,
                countries: activityDetail.Countries?.map(country => country.name),
            });
        }
    }, [activityDetail, id])

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
        setErrors(validationForm({
            ...form,
            [event.target.name]: event.target.value,
        }));
    };
    
    const handleCountries = (event) => {
        const selectedOptions = Array.from(
          event.target.selectedOptions,
          (option) => option.value
        );
        setForm({
          ...form,
          countries: selectedOptions,
        });
        setErrors(validationForm({ ...form, countries: selectedOptions }));
      };

    const handleSubmit = () => {
        dispatch(editActivity(form, id));
        alert("Your activity has been modified");
    };

    return (
        <div className={stylesForm.div}>
            {loading ?
            <Loading /> : 
            (<div className={stylesForm.divForm}>
            <form onSubmit={handleSubmit} className={stylesForm.form}>
                <div className={stylesForm.divAct}>
                    <label htmlFor="name" className={stylesForm.labelAct}>Activity</label>
                    <input type="text" name="name" className={stylesForm.inputAct} placeholder="Type activity's name or short description..." value={form.name} onChange={handleChange}/>
                    {errors.name && <span className={stylesForm.spans}>{errors.name}</span>}
                </div>
                <div className={stylesForm.divDif}>
                    <label htmlFor="difficulty" className={stylesForm.labelDif}>Difficulty (min: 1 - max: 5)</label>
                    <input type="text" name="difficulty" className={stylesForm.inputDif} placeholder="..." value={form.difficulty} onChange={handleChange}/>
                    {errors.difficulty && <span className={stylesForm.spans}>{errors.difficulty}</span>}
                </div>
                <div className={stylesForm.divDur}>
                    <label htmlFor="duration" className={stylesForm.labelDur}>Duration (hours)</label>
                    <input type="text" name="duration" className={stylesForm.inputDur} placeholder="..." value={form.duration} onChange={handleChange}/>
                    {errors.duration && <span className={stylesForm.spans}>{errors.duration}</span>}
                </div>
                <div className={stylesForm.divSeas}>
                    <label htmlFor="season" className={stylesForm.labelSeas}>Recommended season for the activity</label>
                    <label className={stylesForm.labelsSeas}><input id="Summer" type="radio" name="season" value="Summer" checked={form.season === "Summer"} onChange={handleChange} className={stylesForm.inputSeas}/> Summer ☀️</label>
                    <label className={stylesForm.labelsSeas}><input id="Autumn" type="radio" name="season" value="Autumn" checked={form.season === "Autumn"} onChange={handleChange} className={stylesForm.inputSeas}/> Autumn 🍂</label>
                    <label className={stylesForm.labelsSeas}><input id="Winter" type="radio" name="season" value="Winter" checked={form.season === "Winter"} onChange={handleChange} className={stylesForm.inputSeas}/> Winter ❄️</label>
                    <label className={stylesForm.labelsSeas}><input id="Spring" type="radio" name="season" value="Spring" checked={form.season === "Spring"} onChange={handleChange} className={stylesForm.inputSeas}/> Spring 🌸</label>
                    {errors.season && <span className={stylesForm.spans}>{errors.season}</span>}
                </div>
                <div className={stylesForm.divCountries}>
                    <label htmlFor="countries" className={stylesForm.labelCountries}>Countries associated with the activity</label>
                    <select
                name="countries"
                multiple
                className={stylesForm.selectCountries}
                value={form.countries}
                onChange={handleCountries}
              >
                {countriesCopy
                  .sort((a, b) => a.name > b.name)
                  .map((country) => (
                    <option key={country.id} value={country.name}>
                      <img
                        src={country.flag}
                        alt={country.flag}
                        className={stylesForm.imgCountries}
                      />
                      {country.name}
                    </option>
                  ))}
              </select>
                    {errors.countries && <span className={stylesForm.spans}>{errors.countries}</span>}
                </div>
                <button className={stylesForm.btnSubmit} type="submit" disabled={Object.keys(errors).length}>Modify activity</button>
            </form>
            </div>
            )}
        </div>
    );
};

export default Edit;