import React from 'react'
import { translate } from "react-i18next";
import Clients from './Clients'
class Admin extends React.Component {
    render() {
        const { t } = this.props;
        if (this.props.filtered) {
            return (
                <div>
                    <form onSubmit={this.props.handleSubmit}>
                        {t('search Name')}: <input type="text" onChange={this.props.searchName} />
                        {t('change Name')}:<input type="text" onChange={this.props.changeName} />
                        {t('change Rating')}:<input type="text" onChange={this.props.changeRating} />
                        <input type="submit" value={t("submit")} />
                    </form>
                    <Clients users={this.props.filtered} />
                </div>
            )
        }
    }
}

export default translate("translations")(Admin);