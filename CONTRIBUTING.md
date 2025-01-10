## Developers Guide

Developers are welcome to contribute to this project and help make it more dynamic.

The **Daily Quran** extension is developed using **Manifest V3**. As Manifest V2 is being deprecated, managing background audio in the new version (MV3) has become more complex due to stricter guidelines. To avoid potential issues with future updates, I’ve decided not to use any external APIs or packages that could cause problems when upgrading to newer versions. It is also highly recommended to use vanilla JavaScript to keep the extension lightweight and more compatible with future changes.

## Pre-Commit Rules

1. **Use Vanilla JavaScript**  
   - It is highly recommended to write code using plain JavaScript to maintain simplicity and compatibility.

2. **No External API Calls**  
   - External API usage is strictly prohibited to ensure the extension remains self-contained and avoids potential issues with API dependencies.

3. **Avoid Libraries/Frameworks**  
   - The use of any third-party libraries, packages, or frameworks is not allowed to keep the extension lightweight and minimize update-related conflicts.

4. **No PRs for Framework Conversions**  
   - Please do not submit pull requests for converting the project to use frameworks like Extension.js or any others.

5. **Code Consistency**  
   - Ensure that code is clean, consistent, and adheres to the project's coding standards.

6. **Performance Optimization**  
   - Focus on writing efficient, optimized code to ensure smooth performance in the browser.


Thank you for considering contributing to this project! By submitting your contributions, you agree that:
- Your contributions will be governed by the project’s Custom License.
- You will not reuse the project code outside of this project for any purpose.

Please follow the project's coding standards and guidelines while contributing.
