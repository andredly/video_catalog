// @flow
export const CLEAR_STATE = 'CLEAR_STATE';

export const clearState = () => ({
  type: CLEAR_STATE,
});

function testFlowFunction(test: ?string): number {
  return test + "result";
}
