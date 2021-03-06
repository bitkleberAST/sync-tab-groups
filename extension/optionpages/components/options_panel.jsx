class OptionsPanel extends React.Component{
  render() {
    return (
      <div id="panel">
        <SettingsSection
          options={this.props.options} onOptionChange={this.props.onOptionChange}
          selected={this.props.selected}/>
        {/*<AdvSettingsSection
          options={this.props.options.groups} onOptionChange={this.props.onOptionChange}
          selected={this.props.selected}/>
        */}
        <ShortcutsSection
          options={this.props.options} onOptionChange={this.props.onOptionChange}
        selected={this.props.selected}/>
        <InterfaceSection
          options={this.props.options} onOptionChange={this.props.onOptionChange}
        selected={this.props.selected}/>
        <SaveSection
          options={this.props.options} onOptionChange={this.props.onOptionChange}
          onImportClick={this.props.onImportClick}
          onExportClick={this.props.onExportClick}
          onDeleteAllGroups={this.props.onDeleteAllGroups}
          onReloadGroups={this.props.onReloadGroups}
          selected={this.props.selected}
         /* TODO: end of bookmark auto-save
         onBackUpClick: this.props.onBackUpClick*//>
        <AboutSection
        selected={this.props.selected}/>
      </div>
    );
  }
};

OptionsPanel.propTypes = {
  onOptionChange: PropTypes.func,
  onBackUpClick: PropTypes.func,
  onImportClick: PropTypes.func,
  onExportClick: PropTypes.func,
  onDeleteAllGroups: PropTypes.func,
  onReloadGroups: PropTypes.func,
  selected: PropTypes.string,
};
