/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { getBackgroundColor } from "./getBackgroundColor";

describe("getBackegroundColor", () => {
  const shouldideploy: boolean = false;
  it("should return green for Monday (day 1)", () => {
    const result = getBackgroundColor(1);
    expect(result).toBe("MediumSpringGreen");
  });

  it("should return green for Tuesday (day 2)", () => {
    const result = getBackgroundColor(2);
    expect(result).toBe("MediumSpringGreen");
  });

  it("should return green for Wednesday (day 3)", () => {
    const result = getBackgroundColor(3);
    expect(result).toBe("MediumSpringGreen");
  });

  it("should return green for Thursday (day 4)", () => {
    const result = getBackgroundColor(4);
    expect(result).toBe("MediumSpringGreen");
  });

  it("should return LightSalmon for Monday (day 1) and shouldideploy false", () => {
    const result = getBackgroundColor(1, shouldideploy);
    expect(result).toBe("LightSalmon");
  });

  it("should return green for Tuesday (day 2) and shouldideploy false", () => {
    const result = getBackgroundColor(2, shouldideploy);
    expect(result).toBe("LightSalmon");
  });

  it("should return green for Wednesday (day 3) and shouldideploy false", () => {
    const result = getBackgroundColor(3, shouldideploy);
    expect(result).toBe("LightSalmon");
  });

  it("should return orange for Thursday (day 4) and shouldideploy false", () => {
    const result = getBackgroundColor(4, shouldideploy);
    expect(result).toBe("LightSalmon");
  });

  it("should return red for Friday (day 5)", () => {
    const result = getBackgroundColor(5);
    expect(result).toBe("Red");
  });

  it("should return red for Saturday (day 6)", () => {
    const result = getBackgroundColor(6);
    expect(result).toBe("Red");
  });

  it("should return red for Sunday (day 0)", () => {
    const result = getBackgroundColor(0);
    expect(result).toBe("Red");
  });

  it("should return white for an invalid day (e.g., 7)", () => {
    const result = getBackgroundColor(7);
    expect(result).toBe("White");
  });
});
