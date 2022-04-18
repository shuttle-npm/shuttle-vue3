import { computed } from "vue";

export function useAlert(props) {
    return computed(() => {
        if (!props.alert || !props.alert.message) {
            return;
        }
    
        var result = props.alert;
    
        result.variant = result.variant ?? "info-state";
    
        return result;
    })    
}