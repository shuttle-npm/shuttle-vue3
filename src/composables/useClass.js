export function useClass(prefix, props) {
    const disabled = props.disabled ?? false;
    const result = {
        
    };

    if (!!prefix) {
        const prefixType = (props.type || "primary").toLowerCase();

        result[prefix] = true;

        if (!disabled) {
            result[prefix + "--primary"] = prefixType === "primary";
            result[prefix + "--secondary"] = prefixType === "secondary";
            result[prefix + "--success"] = prefixType === "success";
            result[prefix + "--danger"] = prefixType === "danger";
            result[prefix + "--warning"] = prefixType === "warning";
            result[prefix + "--info"] = prefixType === "info";
            result[prefix + "--link"] = prefixType === "link";
        }
    }

    result[prefix + "--disabled"] = disabled;

    return result;

}